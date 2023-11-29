export type SplideEventHandlerMap = {
  onMounted: 'mounted';
  onReady: 'ready';
  onMove: 'move';
  onMoved: 'moved';
  onClick: 'click';
  onActive: 'active';
  onInactive: 'inactive';
  onVisible: 'visible';
  onHidden: 'hidden';
  onRefresh: 'refresh';
  onUpdated: 'updated';
  onResize: 'resize';
  onResized: 'resized';
  onDrag: 'drag';
  onDragging: 'dragging';
  onDragged: 'dragged';
  onScroll: 'scroll';
  onScrolled: 'scrolled';
  onDestroy: 'destroy';
  onArrowsMounted: 'arrows:mounted';
  onArrowsUpdated: 'arrows:updated';
  onPaginationMounted: 'pagination:mounted';
  onPaginationUpdated: 'pagination:updated';
  onNavigationMounted: 'navigation:mounted';
  onAutoplayPlay: 'autoplay:play';
  onAutoplayPlaying: 'autoplay:playing';
  onAutoplayPause: 'autoplay:pause';
  onLazyLoadLoaded: 'lazyload:loaded';
};

export type SplideEventHandlers = {
  [K in keyof SplideEventHandlerMap]: (splide: any, ...args: Parameters<any>) => ReturnType<any>;
};
