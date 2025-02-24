import { Chess } from '../chess.js/dist/esm/chess.js';
import { Chessground } from '../chessground/dist/chessground.js';

// Initialize Chess.js
const game = new Chess();

// Initialize Chessground
const board = Chessground(document.getElementById('board-1'), {
  events: {
    move: handleMove, // Pass the handleMove function as the move event handler
  }
});

// Update board initially
board.set({ fen: game.fen() });

function handleMove(orig, dest, capturedPiece) {
  const move = game.move({ from: orig, to: dest });
  if (move) {
    console.log(`Moved ${move.piece} from ${orig} to ${dest}`);
    const piece = game.get(dest);
    if (piece) {
      console.log(`Piece ID: ${piece.id}`);
    } else {
      console.log(`Piece at ${dest} not found`);
    }
    if (capturedPiece) {
      console.log(`Captured ${capturedPiece.color} ${capturedPiece.role}`);
    }
    board.set({ fen: game.fen() }); // Update board position

    // Log the FEN and PGN strings
    console.log(`FEN: ${game.fen()}`);
    console.log(`PGN: ${game.pgn()}`);
  } else {
    console.log(`Invalid move from ${orig} to ${dest}`);
  }
}
