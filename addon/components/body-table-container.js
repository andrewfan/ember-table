import Ember from 'ember';
import TableContainer from 'ember-table/mixins/table-container';
import TouchMoveHandlerMixin from 'ember-table/mixins/touch-move-handler';
import ScrollHandlerMixin from 'ember-table/mixins/scroll-handler';

export default Ember.Component.extend(
  TableContainer,
  TouchMoveHandlerMixin,
  ScrollHandlerMixin,
  {

  classNames: ['ember-table-table-container', 'ember-table-body-container'],

  bodyHeight: null,
  bodyWidth: null,
  scrollLeft: null,
  height: Ember.computed.alias('bodyHeight'),
  width: Ember.computed.alias('bodyWidth'),

  _scrollTop: 0,

  actions: {
    rowDidClick: function(row, event) {
      this.sendAction('rowDidClick', row, event);
    },

    scrollChange: function(scrollLeft, scrollTop) {
      this.set('_scrollTop', scrollTop);
      this.set('scrollLeft', scrollLeft);
    },

    scrollTopChange: function(scrollLeft, scrollTop) {
      this.set('_scrollTop', scrollTop);
    },

    toggleRowCollapse: function(row) {
      this.sendAction('toggleRowCollapse', row);
    }
  }
});
