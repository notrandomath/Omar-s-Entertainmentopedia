module.exports = (sequelize, DataTypes) => {
    const Anime = sequelize.define("Anime", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })

    return Anime
}