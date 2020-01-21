exports.up = function (knex) {
    return (knex.schema.table("cars", (table) => {
        table.string("transmission").defaultTo(null);

        table.string("title_status").defaultTo(null);
    }));
};

exports.down = function (knex) {
    return (knex.schema.table("cars", (table) => {
        table.dropColumn("transmission")
        table.dropColumn("title_status")
    }));
};
