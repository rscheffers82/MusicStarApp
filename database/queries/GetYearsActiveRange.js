const Artist = require('../models/artist');

/**
 * Finds the lowest and highest yearsActive of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max yearsActive, like { min: 0, max: 14 }.
 */
module.exports = () => {
  return Promise.all([
    Artist.find({ })
      .sort({ yearsActive: 1 })
      .limit( 1 ),
      Artist.find({ })
        .sort({ yearsActive: -1 })
        .limit( 1 )
  ]).then( (result) => {
    let min = result[0][0].yearsActive;
    let max = result[1][0].yearsActive;
    return { min, max }
  });
};
