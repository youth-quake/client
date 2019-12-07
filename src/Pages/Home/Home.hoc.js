import { compose, withState, withHandlers, lifecycle } from 'recompose'

const enhance = compose(
	withState('isScroll', 'setIsScroll', false),
	withHandlers({
		handleScroll: ({ setIsScroll }) => () => {
			setIsScroll(document.documentElement.scrollTop > 125)
		}
	}),
	lifecycle({
		componentDidMount() {
			const { handleScroll } = this.props
			window.onscroll = () => handleScroll()
		}
	})
)

export default enhance