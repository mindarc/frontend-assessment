const app = Vue.createApp({
	data()	{
		return {
			titleText: 'Hello Developer!',
			quoteText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			contentText1: 'Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
			contentText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
			contentText3: 'Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
			buttonText: 'READ MORE',
			firstName: 'Disha Patani',
			contentImage: 'http://via.placeholder.com/400x300',
			ComputerBanner: 'http://via.placeholder.com/1920x650',
			MobileBanner: 'http://via.placeholder.com/600x600',
		}
	}
})

app.mount('#app')