const boom = require('@hapi/boom');
const Model = require('../model');

class newsServices {
    async addNews(news,userId){
        const myNews = await new Model(news);
        myNews.save();
        userId.news = userId.news.concat(myNews._id);
        await userId.save();

        return myNews;
    };

    async getOneNews(id){
        const News = await Model.findById(id).populate('user');
        if(!News){
            throw boom.notFound('non-exixtent news'); 
        };
        return News;
    };

    async updateNews(id,changes){
        const updateNews = await Model.findOneAndUpdate(
            {_id:id},
            {title:changes.title,
            description:changes.description,
            image:changes.image,
            enlace:changes.enlace,
            date:new Date()},
            {new:true},
        );

        return updateNews;
    };

    async removeNews(id){
        const News = await Model.findByIdAndDelete({
            _id:id,
        });

        return News;
    }
};




module.exports = newsServices;