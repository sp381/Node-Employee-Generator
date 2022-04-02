function generateMarkdown(data) {
    console.log(data);
    //const githubPage =  `https://github.com/${data.}`
    //const userEmail = `https://mail.google.com/${data.employeeEmail}` 
    return `

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.css">
        <title>Employee Profile Generator</title>
    </head>

    <body>
        <header class="card-header"> My Team </header>
        <script src="./lib/generateMarkdown.js"></script>
    </body>
    </html>
    
    `;
}

module.exports = generateMarkdown;