import { GraphQLDateTime } from "graphql-iso-date";

export default {
  DateTime: GraphQLDateTime,
  
  Query: {
    employees: (parent, args, { db }, info) => db.models.employee.findAll(),
    employee: (parent, { id }, { db }, info) => db.models.employee.findByPk(id)
  },

  Mutation: {
    createEmployee: (
      parent,
      { firstName, lastName, user, password, dni, address, phone, email },
      { db },
      info
    ) =>
      db.models.employee.create({
        firstName: firstName,
        lastName: lastName,
        user: user,
        password: password,
        dni: dni,
        address: address,
        phone: phone,
        email: email
      })
  }
};
