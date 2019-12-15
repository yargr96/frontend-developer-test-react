export default () => {
    return new Promise((resolve, reject) => {
        fetch('/src/api/getApps/apps.json')
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(err => reject(err));
    })
}