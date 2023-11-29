import './App.css';
import { useLayoutEffect } from 'react';

import { useAtom } from 'jotai';

import { SplideCustomWrap } from '@/components/Splide/Splide';
import { SplideSlide } from '@/components/Splide/SplideSlide/SplideSlide';
import { atomSplide } from '@/components/Splide/store';
import useScript from '@/hooks/useScript';

function App() {
  const [, setSplide] = useAtom(atomSplide);
  const status = useScript(
    'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js',
    3000,
  );

  useLayoutEffect(() => {
    if (status === 'ready') {
      setSplide(true);
    }
  }, [status]);

  return (
    <div className='App'>
      <SplideCustomWrap
        options={{
          rewind: true,
          gap: '1rem',
        }}
        aria-label='My Favorite Images'
      >
        <SplideSlide>
          <img
            src='https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=3548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Image 1'
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src='https://plus.unsplash.com/premium_photo-1661849963038-7a735f000ae0?q=80&w=3615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Image 2'
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src='https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Image 3'
          />
        </SplideSlide>
      </SplideCustomWrap>
    </div>
  );
}

export default App;
