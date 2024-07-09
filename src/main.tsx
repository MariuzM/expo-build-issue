import { registerRootComponent } from 'expo'
import { View } from 'react-native'

const Main = () => {
	return (
		<View
			style={{
				height: 100,
				width: 100,
				backgroundColor: 'red',
			}}
		/>
	)
}

registerRootComponent(Main)
