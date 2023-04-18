import { TruncateLetterPipe } from './truncate-letter.pipe';

describe('TruncateLetterPipe', () => {
  it('create an instance', () => {
    const pipe = new TruncateLetterPipe();
    expect(pipe).toBeTruthy();
  });
});
