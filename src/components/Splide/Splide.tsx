/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode, forwardRef, useImperativeHandle, useRef } from 'react';

import { useAtomValue } from 'jotai';

import { EVENTS } from './constants/events';
import { SplideTrack } from './SplideTrack/SplideTrack';
import { atomSplide } from './store';
import { SplideProps } from './types';
import { classNames, isEqualShallow, merge } from './utils';

/**
 * The class for the Splide React node.
 *
 * @since 0.5.0
 */
class SplideCustom extends React.Component<SplideProps> {
  /**
   * The RefObject for the Splide root element.
   */
  readonly splideRef = React.createRef<HTMLDivElement>();

  /**
   * Holds the Splide instance.
   */
  splide: any | undefined;

  /**
   * Holds current options to compare with new ones.
   */
  private options: any | undefined;

  /**
   * Holds the latest slides to compare with new ones.
   */
  private slides: HTMLElement[] = [];

  /**
   * Called when the component is mounted.
   */
  componentDidMount(): void {
    const { options, extensions, transition } = this.props;
    const { current } = this.splideRef;

    if (current && (window as any).Splide) {
      this.splide = new (window as any).Splide(current, options);
      this.bind(this.splide);
      this.splide.mount(extensions, transition);

      this.options = merge({}, options || {});
      this.slides = this.getSlides();
    }
  }

  /**
   * Destroys the splide instance.
   */
  componentWillUnmount(): void {
    if (this.splide) {
      this.splide.destroy();
      this.splide = undefined;
    }

    this.options = undefined;
    this.slides.length = 0;
  }

  /**
   * Updates and/or refreshes the splide when the component is updated.
   */
  componentDidUpdate(): void {
    if (!this.splide) {
      return;
    }

    const { options } = this.props;

    const newSlides = this.getSlides();

    if (!isEqualShallow(this.slides, newSlides)) {
      this.splide.refresh();
      this.slides = newSlides;
    }
  }

  /**
   * Adds a splide instance to sync with.
   *
   * @param splide - A Splide instance.
   */
  sync(splide: any): void {
    this.splide?.sync(splide);
  }

  /**
   * Moves the slider by the specified control pattern.
   *
   * @see Splide#go()
   *
   * @param control - A control pattern.
   */
  go(control: number | string): void {
    this.splide?.go(control);
  }

  /**
   * Returns an array with slide elements.
   *
   * @return An array with slide elements.
   */
  protected getSlides(): HTMLElement[] {
    if (this.splide) {
      const children = this.splide.Components.Elements?.list.children;
      return (children && Array.prototype.slice.call(children)) || [];
    }

    return [];
  }

  /**
   * Binds event handlers to the splide instance.
   *
   * @param splide - A splide instance.
   */
  protected bind(splide: any): void {
    for (const [event, name] of EVENTS) {
      const handler = this.props[name];

      if (typeof handler === 'function') {
        splide.on(event, (...args: any[]) => {
          handler(splide, ...args);
        });
      }
    }
  }

  /**
   * Omits specified keys from props.
   *
   * @param props - An object with props.
   * @param keys  - An array with keys to omit.
   *
   * @return An object with props without specified keys.
   */
  omit<K extends keyof SplideProps>(props: SplideProps, keys: readonly K[]): Omit<SplideProps, K> {
    for (const key of keys) {
      if (Object.prototype.hasOwnProperty.call(props, key)) {
        delete props[key];
      }
    }

    return props;
  }

  /**
   * Render the splide carousel elements.
   *
   * @return A root node.
   */
  render(): ReactNode {
    const { className, tag: Root = 'div', hasTrack = true, children, ...props } = this.props;

    return (
      <Root
        className={classNames('splide', className)}
        ref={this.splideRef}
        {...this.omit(props, ['options', ...EVENTS.map((event: any) => event[1])])}
      >
        {hasTrack ? <SplideTrack>{children}</SplideTrack> : children}
      </Root>
    );
  }
}

export const SplideCustomWrap = forwardRef(({ children, ...props }: any, ref: any) => {
  const splideStatus = useAtomValue(atomSplide);
  const ref1 = useRef(null);

  useImperativeHandle(ref, () => {
    return ref1.current;
  });

  if (splideStatus) {
    return (
      <SplideCustom {...props} ref={ref1}>
        {children}
      </SplideCustom>
    );
  }

  return <></>;
});
