/* eslint-disable prettier/prettier */
export default () => ({
    port: parseInt(process.env.PORT, 10) || 3001,
    database: {
        user: 'iboxsbov',
        password: 'hAj6ogWV2-4J3OTqp_q1u0eeEIO7WIDo',
        host: 'postgres://iboxsbov:hAj6ogWV2-4J3OTqp_q1u0eeEIO7WIDo@tyke.db.elephantsql.com/iboxsbov',
        api_key: '7d146e82-dd89-4ac0-ba47-df43e6cc700c'
    }
});