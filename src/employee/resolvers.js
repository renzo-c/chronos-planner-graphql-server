// import { GraphQLDateTime } from "graphql-iso-date";

export default {
  // DateTime: GraphQLDateTime, //pending point to check if it is used
  Employee: {
    schedules: (parent, args, { db }, info) => {
      return parent.getSchedules();
    }
  },
  Query: {
    employees: (parent, args, { db }, info) => {
      return db.models.employee.findAll();
    },
    employee: (parent, { user }, { db }, info) => {
      // const test = db.models.employee
      //   .findByPk(user)
      //   .then(result => console.log("result", Object.keys(result.__proto__)));
      return db.models.employee.findByPk(user);
    },
    employeeLogin: (parent, { user, password }, { db }, info) => {
      return db.models.employee.findOne({
        where: {
          user,
          password
        }
      });
    },
    employeeSchedules: (parent, { user }, { db }, info) => {
      return db.models.employee.findOne({
        where: {
          user
        }
      });
    }
  },

  Mutation: {
    createEmployee: (parent, args, { db }, info) =>
      db.models.employee.create(args),
    updateEmployee: (parent, args, { db }, info) => {
      return db.models.employee
        .update(args, {
          where: { user: args.user },
          returning: true,
          plain: true
        })
        .then(test => test[1].dataValues);
    },
    deleteEmployee: (parent, args, { db }, info) => {
      return db.models.employee
        .findOne({ where: { user: args.user } })
        .then(employee => {
          db.models.employee.destroy({ where: { user: args.user } });
          return employee;
        });
    }
  }
};
