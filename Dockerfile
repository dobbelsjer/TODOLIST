FROM nginx:1.15.5-alpine
COPY ./dist/TODOLIST /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]