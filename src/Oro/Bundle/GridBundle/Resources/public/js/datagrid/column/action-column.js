/* global define */
define(['underscore', 'backgrid', 'oro/grid/action-cell'],
function(_, Backgrid, ActionCell) {
    'use strict';

    /**
     * Column of grid that contains row actions
     *
     * @export  oro/grid/action-column
     * @class   oro.grid.ActionColumn
     * @extends Backgrid.Column
     */
    return Backgrid.Column.extend({

        /** @property {Object} */
        defaults: _.extend({}, Backgrid.Column.prototype.defaults, {
            name: '',
            label: '',
            editable: false,
            cell: ActionCell,
            headerCell: Backgrid.HeaderCell.extend({
                className: 'action-column'
            }),
            sortable: false,
            actions: []
        }),

        /**
         * {@inheritDoc}
         */
        initialize: function (attrs) {
            attrs = attrs || {};
            if (!attrs.cell) {
                attrs.cell = this.defaults.cell;
            }
            if (!attrs.name) {
                attrs.name = this.defaults.name;
            }
            if (!attrs.actions || _.isEmpty(attrs.actions)) {
                this.set('renderable', false);
            }
            Backgrid.Column.prototype.initialize.apply(this, arguments);
        }
    });
});
