const chai = require("chai");
const PostRepository = require("../repository/postsRepository");
const userRepository = require("../repository/userRepository");
const quoteRepository = require("../repository/quoteRepository");
const rePostRepository = require("../repository/rePostsRepository");
const sinon = require("sinon");
// This sets the mock adapter on the default instance

describe("Post Message", async () => {
  it("Test PostRepository Create method", async () => {
    const postsModel = {
      message: "Hi folks",
      userId: 1,
      data: "2023-01-03T14:18:37.313Z"
    };
    const stubed = sinon
      .stub(PostRepository, "createPosts")
      .returns(postsModel);
    const result = await PostRepository.createPosts(postsModel);
    chai.expect(result).be.an("object");
    chai.expect(result.message).to.be.equal(postsModel.message);
    chai.expect(result.id).to.be.equal(postsModel.id);
    // Restore stub
    stubed.restore();
  });

  it("Test PostRepository Update method", async () => {
    const postsModel = {
      message: "Hi folks",
      userId: 1,
      data: "2023-01-03T14:18:37.313Z"
    };
    const id = 1;
    const stubed = sinon
      .stub(PostRepository, "updatePostsById")
      .returns(postsModel);
    const result = await PostRepository.updatePostsById(id, postsModel);
    chai.expect(result).be.an("object");
    chai.expect(result.message).to.be.equal(postsModel.message);
    chai.expect(result.id).to.be.equal(postsModel.id);
    // Restore stub
    stubed.restore();
  });

  it("Test PostRepository Delete method", async () => {
    const id = 1;
    const message = "Posts deleted with success";
    const stubed = sinon
      .stub(PostRepository, "deletePostsById")
      .returns(message);
    const result = await PostRepository.deletePostsById(id);
    chai.expect(result).be.an("string");
    chai.expect(result).to.be.equal(message);
    // Restore stub
    stubed.restore();
  });

  it("Test PostRepository Get method", async () => {
    const postsModel = {
      message: "Hi folks",
      userId: 1,
      data: "2023-01-03T14:18:37.313Z"
    };
    const id = 1;
    const stubed = sinon
      .stub(PostRepository, "getPostsById")
      .returns(postsModel);
    const result = await PostRepository.getPostsById(id);
    chai.expect(result).be.an("object");
    chai.expect(result.message).to.be.equal(postsModel.message);
    chai.expect(result.id).to.be.equal(postsModel.id);
    // Restore stub
    stubed.restore();
  });
});
describe("User ", async () => {
  it("Test UserRepository GetUserPosts method", async () => {
    const id = 2;
    const page = 1;
    const startDate = 1;
    const endDate = 1;
    const postsResults = {
      joined: "Jan 03, 2023",
      id: 2,
      username: "user",
      email: "user@user.com.br",
      password: "42592e49f79679c8671e211878eef61d3055594b",
      createdAt: "2023-01-03T14:18:25.768Z",
      updatedAt: "2023-01-03T14:18:25.768Z",
      posts: [
        {
          id: 1,
          message: "what's up",
          data: "2023-01-03T14:18:31.872Z",
          createdAt: "2023-01-03T14:18:31.873Z",
          updatedAt: "2023-01-03T14:18:31.873Z",
          userId: 2,
          reposts: [
            {
              id: 4,
              data: "2023-01-03T14:19:46.357Z",
              createdAt: "2023-01-03T14:19:46.357Z",
              updatedAt: "2023-01-03T14:19:46.357Z",
              postId: 1,
              quoteId: null,
              userId: 1,
              quotes: []
            },
            {
              id: 3,
              data: "2023-01-03T14:19:41.853Z",
              createdAt: "2023-01-03T14:19:41.853Z",
              updatedAt: "2023-01-03T14:19:41.853Z",
              postId: 1,
              quoteId: null,
              userId: 2,
              quotes: []
            }
          ],
          quotes: [
            {
              id: 3,
              data: "2023-01-03T14:20:08.469Z",
              comment: "Ohh ...",
              createdAt: "2023-01-03T14:20:08.469Z",
              updatedAt: "2023-01-03T14:20:08.469Z",
              postId: 1,
              repostId: null,
              userId: 1,
              reposts: []
            }
          ]
        }
      ]
    };
    const stubed = sinon
      .stub(userRepository, "getUserByIdAndUsersPosts")
      .returns(postsResults);
    const result = await userRepository.getUserByIdAndUsersPosts(
      id,
      page,
      startDate,
      endDate
    );
    chai.expect(result).be.an("object");
    chai.expect(result.posts).be.an("array");
    chai.expect(result.posts[0].quotes).be.an("array");
    chai.expect(result.posts[0].reposts).be.an("array");
    chai.expect(result.id).to.be.equal(id);
    // Restore stub
    stubed.restore();
  });
});
describe("Quote Message", async () => {
  it("Test QuoteRepository Create method Quote post", async () => {
    const quoteModel = {
      comment: "well well ...",
      repostId: null,
      postId: 1,
      userId: 1,
      data: "2023-01-03T14:20:13.160Z"
    };
    const responseQuote = {
      id: 4,
      postId: 1,
      userId: 1,
      repostId: null,
      comment: "well well ...",
      data: "2023-01-03T14:20:13.160Z",
      updatedAt: "2023-01-03T14:20:13.160Z",
      createdAt: "2023-01-03T14:20:13.160Z"
    };
    const stubed = sinon
      .stub(quoteRepository, "createQuote")
      .returns(responseQuote);
    const result = await quoteRepository.createQuote(quoteModel);
    chai.expect(result).be.an("object");
    chai.expect(result.comment).to.be.equal(quoteModel.comment);
    chai.expect(result.postId).to.be.equal(quoteModel.postId);
    chai.expect(result.userId).to.be.equal(quoteModel.userId);
    stubed.restore();
    // Restore stub
  });
  it("Test QuoteRepository Create method Quote Repost", async () => {
    const quoteModel = {
      comment: "Ohh ...",
      repostId: 1,
      postId: null,
      userId: 1,
      data: "2023-01-03T14:20:13.160Z"
    };
    const responseQuote = {
      id: 4,
      postId: null,
      userId: 1,
      repostId: 1,
      comment: "Ohh ...",
      data: "2023-01-03T14:20:13.160Z",
      updatedAt: "2023-01-03T14:20:13.160Z",
      createdAt: "2023-01-03T14:20:13.160Z"
    };
    const stubed = sinon
      .stub(quoteRepository, "createQuote")
      .returns(responseQuote);
    const result = await quoteRepository.createQuote(quoteModel);
    chai.expect(result).be.an("object");
    chai.expect(result.comment).to.be.equal(quoteModel.comment);
    chai.expect(result.repostId).to.be.equal(quoteModel.repostId);
    chai.expect(result.userId).to.be.equal(quoteModel.userId);
    stubed.restore();
    // Restore stub
  });
  it("Test QuoteRepository Update method", async () => {
    const quoteModel = {
      comment: "Ohh ops...",
      repostId: 1,
      postId: null,
      userId: 1,
      data: "2023-01-03T14:20:13.160Z"
    };
    const responseQuote = {
      id: 4,
      postId: null,
      userId: 1,
      repostId: 1,
      comment: "Ohh ops...",
      data: "2023-01-03T14:20:13.160Z",
      updatedAt: "2023-01-03T14:20:13.160Z",
      createdAt: "2023-01-03T14:20:13.160Z"
    };
    const id = 1;
    const stubed = sinon
      .stub(quoteRepository, "updateQuoteById")
      .returns(responseQuote);
    const result = await quoteRepository.updateQuoteById(id, quoteModel);
    chai.expect(result).be.an("object");
    chai.expect(result.comment).to.be.equal(quoteModel.comment);
    chai.expect(result.repostId).to.be.equal(quoteModel.repostId);
    chai.expect(result.userId).to.be.equal(quoteModel.userId);
    stubed.restore();
    // Restore stub
  });

  it("Test QuoteRepository Delete method", async () => {
    const id = 1;
    const message = "Quote deleted with success";
    const stubed = sinon
      .stub(quoteRepository, "deleteQuoteById")
      .returns(message);
    const result = await quoteRepository.deleteQuoteById(id);
    chai.expect(result).be.an("string");
    chai.expect(result).to.be.equal(message);
    stubed.restore();
  });

  it("Test QuoteRepository Get method", async () => {
    const quoteResponse = {
      id: 1,
      data: "2023-01-03T14:19:54.265Z",
      comment: "Ohh ...",
      createdAt: "2023-01-03T14:19:54.265Z",
      updatedAt: "2023-01-03T14:19:54.265Z",
      postId: null,
      repostId: 2,
      userId: 2
    };
    const id = 1;
    const stubed = sinon
      .stub(quoteRepository, "getQuoteById")
      .returns(quoteResponse);
    const result = await quoteRepository.getQuoteById(id);
    chai.expect(result).be.an("object");
    chai.expect(result.message).to.be.equal(quoteResponse.message);
    stubed.restore();
  });
});

describe("RePost Message", async () => {
  it("Test RePostRepository Create method repost", async () => {
    const repostModel = {
      repostId: null,
      postId: 1,
      userId: 1
    };
    const responseRepost = {
      id: 4,
      postId: 1,
      quoteId: null,
      userId: 1,
      data: "2023-01-03T14:19:46.357Z",
      updatedAt: "2023-01-03T14:19:46.357Z",
      createdAt: "2023-01-03T14:19:46.357Z"
    };
    const stubed = sinon
      .stub(rePostRepository, "createRePosts")
      .returns(responseRepost);
    const result = await rePostRepository.createRePosts(repostModel);
    chai.expect(result).be.an("object");
    chai.expect(result.postId).to.be.equal(repostModel.postId);
    chai.expect(result.userId).to.be.equal(repostModel.userId);
    stubed.restore();
    // Restore stub
  });
  it("Test rePostRepository Create method Repost", async () => {
    const repostModel = {
      repostId: 1,
      postId: null,
      userId: 1
    };
    const responseRepost = {
      id: 4,
      postId: null,
      userId: 1,
      repostId: 1,
      comment: "Ohh ...",
      data: "2023-01-03T14:20:13.160Z",
      updatedAt: "2023-01-03T14:20:13.160Z",
      createdAt: "2023-01-03T14:20:13.160Z"
    };
    const stubed = sinon
      .stub(rePostRepository, "createRePosts")
      .returns(responseRepost);
    const result = await rePostRepository.createRePosts(repostModel);
    chai.expect(result).be.an("object");
    chai.expect(result.repostId).to.be.equal(repostModel.repostId);
    chai.expect(result.userId).to.be.equal(repostModel.userId);
    stubed.restore();
    // Restore stub
  });

  it("Test rePostRepository Delete method", async () => {
    const id = 1;
    const message = "RePost deleted with success";
    const stubed = sinon
      .stub(rePostRepository, "deleteRePostsById")
      .returns(message);
    const result = await rePostRepository.deleteRePostsById(id);
    chai.expect(result).be.an("string");
    chai.expect(result).to.be.equal(message);
    stubed.restore();
  });

  it("Test QuoteRepository Get method", async () => {
    const rePostResponse = {
      id: 1,
      date: "2023-01-03T14:12:20.628Z",
      createdAt: "2023-01-03T14:12:20.629Z",
      updatedAt: "2023-01-03T14:12:20.629Z",
      postId: 1,
      quoteId: null,
      userId: 2
    };
    const id = 1;
    const stubed = sinon
      .stub(rePostRepository, "getRePostsById")
      .returns(rePostResponse);
    const result = await rePostRepository.getRePostsById(id);
    chai.expect(result).be.an("object");
    chai.expect(result.message).to.be.equal(rePostResponse.message);
    stubed.restore();
  });
});
