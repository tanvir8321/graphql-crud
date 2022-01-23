module.exports = (sequelize:any, DataTypes:any) => {
    const User = sequelize.define("user", {
      name: {
        type: DataTypes.STRING
      },
      username: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      }
    });
  
    return User;
  };