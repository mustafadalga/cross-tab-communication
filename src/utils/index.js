export function activeClientIDListener() {
    window.addEventListener("storage", ({ key }) => {
        if (key == 'activeClientID') {
            window.location.reload();
        }
    });
}
