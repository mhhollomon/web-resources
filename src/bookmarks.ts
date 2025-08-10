export default () => ({
    bookmarks : [],
 
    
    async getBookmarks() {
        console.log("Running getBookmarks")
        const activeTags : Array<string> =  (Alpine.store('activeTags') as Array<string>);
        console.log(activeTags)
        let params = ''
        if (activeTags.length > 0) {
            params += 'tags=' + activeTags.join(',')
            
        }
        if (params.length > 0) {
            params += '&logic=' + Alpine.store('tagLogic')
            params = '?' + params
        }
        const url = import.meta.env.VITE_API_PREFIX + 'bookmarks' + params
        console.log(`bookmarks url = ${url}`)
        const response = await fetch(url)
        const data = await response.json()
        return data
    }
})
