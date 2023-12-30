/**
 * 이 파일은 React와 TypeScript를 사용하여 트윗을 임베드하는 기능을 구현합니다.
 * 트윗 ID를 기반으로 트윗을 가져오고, 해당 트윗을 웹사이트에 임베드합니다.
 * 트윗을 가져오는 동안 오류가 발생하면, 오류 메시지를 표시하는 컴포넌트를 렌더링합니다.
 *
 * `TweetContent` 함수는 트윗을 가져와서 임베드하거나, 오류 메시지를 표시합니다.
 * `ReactTweet` 함수는 `TweetContent` 함수를 렌더링합니다.
 * `TweetComponent` 함수는 `ReactTweet` 함수를 렌더링하고, 그 결과를 div 태그로 감싸서 반환합니다.
 */

import { getTweet } from "react-tweet/api";
import { EmbeddedTweet, TweetNotFound, type TweetProps } from "react-tweet";
import "./tweet.css";

const TweetContent = async ({ id, components, onError }: TweetProps) => {
  let error;
  const tweet = id
    ? await getTweet(id).catch((err) => {
        if (onError) {
          error = onError(err);
        } else {
          console.error(err);
          error = err;
        }
      })
    : undefined;

  if (!tweet) {
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return <NotFound error={error} />;
  }

  return <EmbeddedTweet tweet={tweet} components={components} />;
};

export const ReactTweet = (props: TweetProps) => <TweetContent {...props} />;

export async function TweetComponent({ id }: { id: string }) {
  return (
    <div className="tweet my-6">
      <div className={`flex justify-center`}>
        <ReactTweet id={id} />
      </div>
    </div>
  );
}
