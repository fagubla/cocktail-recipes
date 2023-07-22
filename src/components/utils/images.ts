const context = require.context("@/images/", false, /\.jpg$/);
const images = context.keys().map(context);

export default images;
