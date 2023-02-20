
import {
  BigInt
} from "@graphprotocol/graph-ts";
import { PlayerJoined, GameEnded, GameStarted, OwnershipTransferred, } from "../generated/RandomWinnerGame/RandomWinnerGame";
import { Game } from "../generated/schema";

export function handleGameEnded(event: GameEnded): void { 
   // Entities can be loaded from the store using a string ID;
  // The ID is unique across all entities of the same type
  let entity = Game.load(event.params.gameId.toString());
  // because entities only exist after they are saved to the store, 
  // we do a null check to allow for creation of entities on demand
  if (!entity) {
    return;
  };
  // lets set entity feilds based on event parameters
  entity.winner = event.params.winner;
  entity.requestId = event.params.requestId;
  // use the .save() to save to the store
  entity.save();
}


export function handlePlayerJoined(event: PlayerJoined): void { 
   // Entities can be loaded from the store using a string ID;
  // The ID is unique across all entities of the same type
  let entity = Game.load(event.params.gameId.toString());
  // because entities only exist after they are saved to the store, 
  // we do a null check to allow for creation of entities on demand
  if (!entity) {
    return;
  };
  // lets set entity feilds based on event parameters
  let newPlayers = entity.players;
  newPlayers.push(event.params.player);
  entity.players = newPlayers;
  // use the .save() to save to the store
  entity.save();
}

export function handleGameStarted(event: GameStarted): void{
  // Entities can be loaded from the store using a string ID;
  // The ID is unique across all entities of the same type
  let entity = Game.load(event.params.gameId.toString());
  // because entities only exist after they are saved to the store, 
  // we do a null check to allow for creation of entities on demand
  if (!entity) {
    entity = new Game(event.params.gameId.toString());
    entity.players = [];
  };
  // lets set entity feilds based on event parameters
  entity.maxPlayers = event.params.maxPlayers;
  entity.entryFee = event.params.entryFee;
  // use the .save() to save to the store
  entity.save();
}
export function handleOwnershipTransferred(event: OwnershipTransferred): void{}