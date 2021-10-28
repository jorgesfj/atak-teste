const google = require('googleapis').google;
const customSearch = google.customsearch('v1');

const googleSearchCredentials = require('../google-search.json');

const search = async (req,res,next) => {
    try {
    const searchString = req.body.searchString;

    const response = await customSearch.cse.list({
        auth: googleSearchCredentials.apiKey,
        cx: googleSearchCredentials.searchEngineId,
        q: searchString
    });
        res.render('searchPage', {data: response.data["items"], erro: undefined});
    } catch(error) {
        res.render('searchPage', {data: undefined, erro: error});
    }
};

const renderPage = async (req,res,next) => {
    res.render('searchPage', {data: undefined, erro: undefined});
}


module.exports = {
    search,
    renderPage
}