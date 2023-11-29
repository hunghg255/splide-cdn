import { SplideEventHandlerMap } from '../types';

const EVENT_MOUNTED = 'mounted';
const EVENT_READY = 'ready';
const EVENT_MOVE = 'move';
const EVENT_MOVED = 'moved';
const EVENT_CLICK = 'click';
const EVENT_ACTIVE = 'active';
const EVENT_INACTIVE = 'inactive';
const EVENT_VISIBLE = 'visible';
const EVENT_HIDDEN = 'hidden';
const EVENT_REFRESH = 'refresh';
const EVENT_UPDATED = 'updated';
const EVENT_RESIZE = 'resize';
const EVENT_RESIZED = 'resized';
const EVENT_DRAG = 'drag';
const EVENT_DRAGGING = 'dragging';
const EVENT_DRAGGED = 'dragged';
const EVENT_SCROLL = 'scroll';
const EVENT_SCROLLED = 'scrolled';
const EVENT_DESTROY = 'destroy';
const EVENT_ARROWS_MOUNTED = 'arrows:mounted';
const EVENT_ARROWS_UPDATED = 'arrows:updated';
const EVENT_PAGINATION_MOUNTED = 'pagination:mounted';
const EVENT_PAGINATION_UPDATED = 'pagination:updated';
const EVENT_NAVIGATION_MOUNTED = 'navigation:mounted';
const EVENT_AUTOPLAY_PLAY = 'autoplay:play';
const EVENT_AUTOPLAY_PLAYING = 'autoplay:playing';
const EVENT_AUTOPLAY_PAUSE = 'autoplay:pause';
const EVENT_LAZYLOAD_LOADED = 'lazyload:loaded';

export const EVENTS: Array<[any, keyof SplideEventHandlerMap]> = [
  [EVENT_MOUNTED, 'onMounted'],
  [EVENT_READY, 'onReady'],
  [EVENT_MOVE, 'onMove'],
  [EVENT_MOVED, 'onMoved'],
  [EVENT_CLICK, 'onClick'],
  [EVENT_ACTIVE, 'onActive'],
  [EVENT_INACTIVE, 'onInactive'],
  [EVENT_VISIBLE, 'onVisible'],
  [EVENT_HIDDEN, 'onHidden'],
  [EVENT_REFRESH, 'onRefresh'],
  [EVENT_UPDATED, 'onUpdated'],
  [EVENT_RESIZE, 'onResize'],
  [EVENT_RESIZED, 'onResized'],
  [EVENT_DRAG, 'onDrag'],
  [EVENT_DRAGGING, 'onDragging'],
  [EVENT_DRAGGED, 'onDragged'],
  [EVENT_SCROLL, 'onScroll'],
  [EVENT_SCROLLED, 'onScrolled'],
  [EVENT_DESTROY, 'onDestroy'],
  [EVENT_ARROWS_MOUNTED, 'onArrowsMounted'],
  [EVENT_ARROWS_UPDATED, 'onArrowsUpdated'],
  [EVENT_PAGINATION_MOUNTED, 'onPaginationMounted'],
  [EVENT_PAGINATION_UPDATED, 'onPaginationUpdated'],
  [EVENT_NAVIGATION_MOUNTED, 'onNavigationMounted'],
  [EVENT_AUTOPLAY_PLAY, 'onAutoplayPlay'],
  [EVENT_AUTOPLAY_PLAYING, 'onAutoplayPlaying'],
  [EVENT_AUTOPLAY_PAUSE, 'onAutoplayPause'],
  [EVENT_LAZYLOAD_LOADED, 'onLazyLoadLoaded'],
];
