import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'

interface Props {
	type: string
}
function Icon({type}:Props) {
  return (
	<>
		{type === "pin" && <FaLocationArrow/>}
	</>
  )
}

export default Icon