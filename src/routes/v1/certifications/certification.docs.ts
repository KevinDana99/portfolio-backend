/**
 * @swagger
 * /certifications/all:
 *   get:
 *     summary: Obtiene todas las certificaciones
 *     description: Este endpoint permite obtener todas las certificaciones disponibles.
 *     responses:
 *       '200':
 *         description: Lista de certificaciones recuperada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               $ref: "#/components/schemas/certifications"
 *       '400':
 *         description: Solicitud incorrecta
 */

/**
 * @swagger
 * /certifications/certification/{id}:
 *   get:
 *     summary: Obtiene una certificacion
 *     description: Permite obtener una certificacion en concreto
 *     parameters:
 *       - name: id
 *         in: param
 *         description: id de la certificacion a obtener
 *         required: true
 *     responses:
 *       '200':
 *         description: Lista de certificaciones recuperada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               $ref: "#/components/schemas/certifications"
 *       '400':
 *         description: Solicitud incorrecta
 */

/**
 * @swagger
 * /certifications/certification/create:
 *   post:
 *     summary: Crea una certificacion
 *     description: Permite crear una certificacion.
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Cuerpo del certificado a crear
 *         required: true
 *         schema:
 *          type: object
 *          $ref: "#/components/schemas/certification"
 *     responses:
 *       '200':
 *         description: Lista de certificaciones recuperada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               $ref: "#/components/schemas/certifications"
 *       '400':
 *         description: Solicitud incorrecta
 */

/**
 * @swagger
 * /certifications/certification/update:
 *   patch:
 *     summary: Modifica una certificacion
 *     description: Permite modificar una certificacion.
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Cuerpo del certificado a modificar
 *         required: true
 *         schema:
 *          type: object
 *          $ref: "#/components/schemas/certification"
 *     responses:
 *       '200':
 *         description: Lista de certificaciones recuperada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               $ref: "#/components/schemas/certifications"
 *       '400':
 *         description: Solicitud incorrecta
 */
