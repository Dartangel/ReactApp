import { statement } from "@babel/template";

export const calculationText = (id) => (
    {
        type: 'INCREASE_COUNTER',
		id
	}   
	)
	export const clearText = (id) => (
		{
			type: 'clear',
			id
		}   
		)
	export const calcText = (result) => (
		{
			type: 'calc',
			payload:eval(result)
		}
		)
		