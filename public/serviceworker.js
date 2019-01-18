self.addEventListener("fetch", function(event) {
    event.respondWith(
        fetch(event.request).catch(function () {
            console.log("Error: " + event.request.url);
            return new Response(
                "<html><head><style>body { background-color:#333 }</style></head><body></body></html>",
                {
                    headers:
                    {
                        "Content-Type": "text/html"
                    }
                }
            );
        })
    );
});