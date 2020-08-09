class Github{
    constructor () {
        this.client_id = 'e2dda7c2a9ac8934bc90';
        this.client_secret = '51f6c06f6991cc2bf8aa055986209042d068f918';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.cilent_secret}`);

        const profile = await profileResponse.json();

        return{
            profile
        }
    }
}