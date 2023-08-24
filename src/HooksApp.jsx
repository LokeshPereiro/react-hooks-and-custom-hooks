import { Callback } from "./06-memo/Callback";
import { MemoHook } from "./06-memo/MemoHook";
import { Memorize } from "./06-memo/Memorize";
import { Padre } from "./07-tarea-memo/Padre";

export function HooksApp() {
  return (
    <div>
      <h1 className="p-2 text-white text-center card  bg-secondary">
        HooksApp
      </h1>
      <hr />
      <Padre />
    </div>
  );
}
