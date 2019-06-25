import { GraphQLDateTime } from "graphql-iso-date";

export default {
  DateTime: GraphQLDateTime,

  Query: {
    employees: (parent, args, { db }, info) => db.models.employee.findAll(),
    employee: (parent, { id }, { db }, info) => db.models.employee.findByPk(id)
  },

  Mutation: {
    createEmployee: (parent, args, { db }, info) =>
      db.models.employee.create(args),
    updateEmployee: (parent, args, { db }, info) => {
      return db.models.employee
        .update(args, {
          where: { id: args.id },
          returning: true,
          plain: true
        })
        .then(test => test[1].dataValues);
    },
    deleteEmployee: (parent, args, { db }, info) => {
      const deletedEmployee = db.models.employee
        .findByPk(args.id)
        .then(test => {
          return test;
        });
      return deletedEmployee;
    }
  }
};
