export const onClientEntry = async () => {
  if (typeof IntersectionObserver === 'undefined') {
    // eslint-disable-next-line global-require
    require('intersection-observer');
    // eslint-disable-next-line no-console
    console.log('👍 IntersectionObserver is polyfilled');
  }
};

export default onClientEntry;
