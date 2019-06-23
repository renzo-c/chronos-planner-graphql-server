import Sequelize from 'sequelize';

const waiterModel = {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            isAlpha: {
                args: true,
                msg: "Firstname must contain characters from a to z only"
            },
            len: {
                args: [4, 20],
                msg: "Firstname must contain more than 8 and less than 20 characters"
            },
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            isAlpha: {
                args: true,
                msg: "Lastname must contain characters from a to z only"
            },
            len: {
                args: [4, 20],
                msg: "Lastname must contain more than 8 and less than 20 characters"
            },
        }
    },
    user: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isAlphanumeric: {
                args: true,
                msg: "User must contain characters and numbers only"
            }
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [8, 20],
                msg: "Password must contain at least 8 characters and not more than 20"
            },
        }
    },
    dni: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            is: {
                args: /[0-9]{8}/,
                msg: "DNI must contain 8 numbers only"
            },
        }
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [8, 20],
                msg: "Address must contain no more than 20  characters"
            },
        }
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {
                is: /[0-9]{9}/,
                msg: "Phone must contain 9 numbers only"
            },
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                args: true,
                msg: "Invalid email format. Valid format example: foo@bar.com"
            }
        }
    },
    updatedAt: {
        type: Sequelize.DATE,
    },
    createdAt: {
        type: Sequelize.DATE,
    }
}

export default waiterModel;