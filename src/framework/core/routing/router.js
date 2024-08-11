export const router = {
    getUrl() {
        return window.location.hash.slice(1)
    },
    navigate(url) {
        return window.location.hash = url
    }
}