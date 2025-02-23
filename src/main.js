import { Chess } from '../chess.js/dist/esm/chess.js';
import { Chessground } from '../chessground/dist/chessground.js';

// Initialize Chess.js
const game = new Chess();

// Initialize Chessground
const board = Chessground(document.getElementById('board-1'), {
  orientation: 'white',
  draggable: true,
  dropOffBoard: 'trash',
  onMove: (from, to) => handleMove(from, to),
});

// Handle moves
function handleMove(from, to) {
  const move = game.move({ from, to });
  if (move) {
    board.set({ fen: game.fen() }); // Update board position
  }
}

// Update board initially
board.set({ fen: game.fen() });
