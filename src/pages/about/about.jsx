import tictactoe from "../../assets/Tic_tac_toe_img.png";

export default function About() {
  return (
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <p class="text-left text-xl p-6">
          Tic-tac-toe (American English), noughts and crosses (Commonwealth
          English), or Xs and Os (Irish English) is a paper-and-pencil game for
          two players who take turns marking the spaces in a three-by-three grid
          with X or O. The player who succeeds in placing three of their marks
          in a horizontal, vertical, or diagonal row is the winner. It is a
          solved game, with a forced draw assuming best play from both players.
        </p>
        <div class="p-6">
          <img src={tictactoe} alt="tic tac toe board" />
        </div>
      </div>
    </div>
  );
}
