
exports.up = function (knex) {
    return (knex.schema.createTable("cars", (table) => {
        //just put this everywhere, at all times, forever and ever.
        table.increments()

        //VIN
        table.string("vin").index();

        //Make
        table.string("make").index();

        //Model
        table.string("model").index();

        //mileage
        table.integer("mileage");

        //A timestamp a day keeps the mystery away.
        table.timestamps(true, true);

    }));
};

exports.down = function (knex) {
    return (knex.schema.dropTableIfExists("cars"));
};
