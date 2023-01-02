const Quote = require("../models/quote.js");
const createQuote = async (QuoteModel) => {
  try {
    const quote = await Quote.create(QuoteModel);
    console.log("OK createOne Quote: ", quote.toJSON());
    return quote;
  } catch (error) {
    console.log("ERROR in createOne " + "Quote:", error);
    return error;
  }
};
const deleteQuoteById = async (id) => {
  try {
    const result = await Quote.destroy({ where: { id } });
    if (result) {
      return { message: "Quote deleted with success" };
    } else {
      return { message: `Can't find Quote ${id} to delete`, status: 404 };
    }
  } catch (error) {
    return error;
  }
};
const getQuoteById = async (id) => {
  try {
    const result = await Quote.findOne({ where: { id } });
    if (result) {
      return result;
    } else {
      return { message: `Can't find Quote with id ${id}`, status: 404 };
    }
  } catch (error) {
    return error;
  }
};
const getQuoteByUserId = async (userId) => {
  try {
    const result = await Quote.findAll({
      where: { userId }
    });
    if (result) {
      return result;
    } else {
      return { message: `Can't find Quote with id ${userId}`, status: 404 };
    }
  } catch (error) {
    return error;
  }
};
const getAllQuote = async (page) => {
  try {
    // Get Pagination Limit
    const limitPage = process.env.PAGINATION * 1;
    return await Quote.findAll({
      offset: page || 0,
      limit: limitPage,
      order: [["createdAt", "DESC"]]
    });
  } catch (error) {
    return error;
  }
};
const updateQuoteById = async (id, QuoteModel) => {
  try {
    const result = await Quote.update(QuoteModel, { where: { id } });
    if (result[0] === 1) {
      return { message: "Quote updated with success" };
    } else {
      return { message: `Can't find Quote ${id} to update`, status: 404 };
    }
  } catch (error) {
    return error;
  }
};
const factory = {
  createQuote,
  getQuoteById,
  getAllQuote,
  deleteQuoteById,
  updateQuoteById,
  getQuoteByUserId
};
module.exports = factory;
