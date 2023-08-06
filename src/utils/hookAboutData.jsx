import { useState, useEffect } from 'react'

export function useAboutData() {
	const [data, setData] = useState(null)
	const [isLoading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	useEffect(() => {
		async function getData() {
			try {
				const response = await fetch("/aboutdata.json")
				const jsonData = await response.json()
				setData(jsonData)
			} catch (err) {
				console.log(err)
				setError(true)
			} finally {
				setLoading(false)
			}
		}
		getData()
	}, [])
	
	return { data, isLoading, error }
}