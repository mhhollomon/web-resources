export default () => ({
    tags : [],
    sort : "count",
 
    
    async getTags() {
        console.log(`Running getTags - sort = ${this.sort}`)
        const response = await fetch(import.meta.env.VITE_API_PREFIX + 'tags')
        const data = await response.json()
        if (this.sort == "count") {
            data.sort((a: any, b: any) => b.count - a.count)
        } else {
            data.sort((a: any, b: any) => a.name.localeCompare(b.name)) 
        }
        return data
    }
})