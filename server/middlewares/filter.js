const notAllowed = ['poo', 'butt', 'internet explorer', 'safari', 'haxor', 'nerfherder', ]

module.exports = (req, res, next) => {
    while ( notAllowed.find(word => req.body.text.includes(word) ) ) {
        const badWord = notAllowed.find( word => req.body.text.includes(word) );
        req.body.text = req.body.text.replace( badword, '*'.repeat( badWord.length ));
    }
    next();
};