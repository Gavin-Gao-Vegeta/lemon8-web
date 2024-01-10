import { createGetRoutes, setupLayouts } from 'virtual:meta-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { routes as fileRoutes } from 'vue-router/auto/routes'
import routes from './routerslist'

declare module 'vue-router' {
	// 在这里定义你的 meta 类型
	// eslint-disable-next-line no-unused-vars
	interface RouteMeta {
		title?: string
		layout?: string
	}
}

// 重定向 BASE_URL
fileRoutes.flat(Infinity).forEach((route) => {
	route.path = safeResolve(route.path)
})

export const router = createRouter({
	history: createWebHistory(),
	routes: routes,
})

export const getRoutes = createGetRoutes(router)

export default router
