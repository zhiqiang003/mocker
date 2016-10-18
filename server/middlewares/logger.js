export default function(app, config) {
    return function *(next) {
        console.log('----- logger: %s -> %s : %s', this.method, this.url, this.status);
        try {
            if (this.status >= 400) {
                this.redirect('/error');
            }
        } catch (e) {
            console.log(e);
        }
    }
}
