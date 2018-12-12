'use strict';

module.exports = function(Reserva) {
  Reserva.beforeRemote('create', function (context, reserva, next) {
    context.args.data.usuarioId = context.req.accessToken.userId;
    next();
  });

Reserva.beforeRemote('create',function(context, instance, next){
var desde = context.args.desde;
var hasta = context.args.hasta;
if(hasta>desde) {next(error,"LA FECHA LIMITE NO PUEDE SER MENOR A LA INICIAL");}
next();
});

/**
 * Descubre las reservas que estan activas hoy
 * @param {Function(Error, array)} callback
 */
/* NO FUNCIONA
Reserva.Hoy = function(callback) {
  var ocupadas;

  Reserva.find({"where": {"and"[{"2018-12-11">="Review.desde"},{"2018-12-11"<"Revies.hasta"}]}} function(err,ocupadas){
callback(err,ocupadas);
});
  callback(null, ocupadas);
};
*/
};
