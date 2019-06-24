import { GraphQLDateTime } from "graphql-iso-date";

export default {
  DateTime: GraphQLDateTime,
  
  Query: {
    waiters: (parent, args, { db }, info) => db.models.waiter.findAll(),
    waiter: (parent, { id }, { db }, info) => db.models.waiter.findByPk(id)
  },

  Mutation: {
    createWaiter: (
      parent,
      { firstName, lastName, user, password, dni, address, phone, email },
      { db },
      info
    ) =>
      db.models.waiter.create({
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
