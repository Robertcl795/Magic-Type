import { json, type RequestHandler } from '@sveltejs/kit'

import english from './languages/english.json'

export const GET: RequestHandler = ({ url }: { url: Record<string, any>}) => {
	const limit = Number(url.searchParams.get('limit'))
	const words = english.words.slice(0, limit).sort(() => 0.5 - Math.random())
	return json(words)
}