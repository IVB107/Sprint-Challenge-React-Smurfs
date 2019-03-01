1.  Explain the differences between `client-side routing` and `server-side routing`.

    SERVER SIDE ROUTING:
    - You navigate to a web page
    - The website requests data for that page from the server
    - The server returns a document/html file/template to the browser and the browser can render that page
    - All updates handled by the server
    - Each time we navigate to a new URL a fresh page is loaded on the server, then sent to the browser and the browser refreshes in order to render the new page.

    CLIENT SIDE ROUTING
    - JavaScript within a client app (web, desktop, mobile, etc)manages the data for that application within its own memory
    - The browser now has what it needs in memory to render different pages
    - If additional data is needed that is not in memory, an api request is made and simple json is returned, rather than an entire html page
    - Since the server is no longer compiling the page for the browser, the bowser doesn’t need to refresh between routes

1.  What does HTTP stand for?

    - Hyper Text Transfer Protocol

1.  What does CRUD stand for?

    - Create, Read, Update, Delete
1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    - C: Create === .post()
    - R: Read === .get()
    - U: Update === .put()
    - D: Delete === .delete()

1.  Mention three tools we can use to make AJAX requests

    1. Axios
    2. Fetch API
    3. jQuery
